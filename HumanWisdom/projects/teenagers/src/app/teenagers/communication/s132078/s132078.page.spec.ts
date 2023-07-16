import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132078Page } from './s132078.page';

describe('S132078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132078Page;
  let fixture: ComponentFixture<S132078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
