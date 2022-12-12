import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62022Page } from './s62022.page';

describe('S62022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62022Page;
  let fixture: ComponentFixture<S62022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
