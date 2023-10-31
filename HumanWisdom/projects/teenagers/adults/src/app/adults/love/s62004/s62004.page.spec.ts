import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62004Page } from './s62004.page';

describe('S62004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62004Page;
  let fixture: ComponentFixture<S62004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
