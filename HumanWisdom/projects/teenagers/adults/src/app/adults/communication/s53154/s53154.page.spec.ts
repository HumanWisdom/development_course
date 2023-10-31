import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53154Page } from './s53154.page';

describe('S53154Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53154Page;
  let fixture: ComponentFixture<S53154Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53154Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53154Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
