import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62102Page } from './s62102.page';

describe('S62102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62102Page;
  let fixture: ComponentFixture<S62102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
