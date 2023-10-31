import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53092Page } from './s53092.page';

describe('S53092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53092Page;
  let fixture: ComponentFixture<S53092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
