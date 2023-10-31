import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18078Page } from './s18078.page';

describe('S18078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18078Page;
  let fixture: ComponentFixture<S18078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
