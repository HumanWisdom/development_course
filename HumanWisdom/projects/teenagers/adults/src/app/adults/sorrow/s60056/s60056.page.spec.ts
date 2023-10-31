import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60056Page } from './s60056.page';

describe('S60056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60056Page;
  let fixture: ComponentFixture<S60056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
