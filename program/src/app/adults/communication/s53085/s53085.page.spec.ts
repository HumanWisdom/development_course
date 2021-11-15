import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53085Page } from './s53085.page';

describe('S53085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53085Page;
  let fixture: ComponentFixture<S53085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
