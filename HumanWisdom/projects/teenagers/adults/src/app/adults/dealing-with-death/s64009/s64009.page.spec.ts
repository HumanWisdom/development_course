import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64009Page } from './s64009.page';

describe('S64009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64009Page;
  let fixture: ComponentFixture<S64009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
