import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62129Page } from './s62129.page';

describe('S62129Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62129Page;
  let fixture: ComponentFixture<S62129Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62129Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62129Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
