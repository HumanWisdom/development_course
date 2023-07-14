import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53049Page } from './s53049.page';

describe('S53049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53049Page;
  let fixture: ComponentFixture<S53049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
