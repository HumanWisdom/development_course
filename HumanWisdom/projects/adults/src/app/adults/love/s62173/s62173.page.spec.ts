import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62173Page } from './s62173.page';

describe('S62173Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62173Page;
  let fixture: ComponentFixture<S62173Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62173Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62173Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
