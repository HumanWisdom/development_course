import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53238Page } from './s53238.page';

describe('S53238Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53238Page;
  let fixture: ComponentFixture<S53238Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53238Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53238Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
