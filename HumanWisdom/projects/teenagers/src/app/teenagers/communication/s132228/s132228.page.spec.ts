import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132228Page } from './s132228.page';

describe('S132228Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132228Page;
  let fixture: ComponentFixture<S132228Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132228Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132228Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
