import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53241Page } from './s53241.page';

describe('S53241Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53241Page;
  let fixture: ComponentFixture<S53241Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53241Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53241Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
