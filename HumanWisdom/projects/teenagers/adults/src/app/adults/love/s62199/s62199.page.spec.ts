import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62199Page } from './s62199.page';

describe('S62199Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62199Page;
  let fixture: ComponentFixture<S62199Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62199Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62199Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
