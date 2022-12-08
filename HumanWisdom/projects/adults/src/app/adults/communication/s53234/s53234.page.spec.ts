import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53234Page } from './s53234.page';

describe('S53234Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53234Page;
  let fixture: ComponentFixture<S53234Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53234Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53234Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
