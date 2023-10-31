import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62089Page } from './s62089.page';

describe('S62089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62089Page;
  let fixture: ComponentFixture<S62089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
