import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60056tPage } from './s60056t.page';

describe('S60056tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60056tPage;
  let fixture: ComponentFixture<S60056tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60056tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60056tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
