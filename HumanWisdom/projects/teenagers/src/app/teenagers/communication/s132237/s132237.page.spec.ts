import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132237Page } from './s132237.page';

describe('S132237Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132237Page;
  let fixture: ComponentFixture<S132237Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132237Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132237Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
