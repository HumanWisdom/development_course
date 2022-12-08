import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64012Page } from './s64012.page';

describe('S64012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64012Page;
  let fixture: ComponentFixture<S64012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
