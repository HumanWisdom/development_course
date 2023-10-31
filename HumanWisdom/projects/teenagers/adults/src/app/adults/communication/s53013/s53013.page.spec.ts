import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53013Page } from './s53013.page';

describe('S53013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53013Page;
  let fixture: ComponentFixture<S53013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
