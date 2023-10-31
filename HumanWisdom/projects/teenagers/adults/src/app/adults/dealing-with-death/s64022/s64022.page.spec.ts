import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64022Page } from './s64022.page';

describe('S64022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64022Page;
  let fixture: ComponentFixture<S64022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
