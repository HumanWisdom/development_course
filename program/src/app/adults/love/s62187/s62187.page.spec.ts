import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62187Page } from './s62187.page';

describe('S62187Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62187Page;
  let fixture: ComponentFixture<S62187Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62187Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62187Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
