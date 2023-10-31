import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53231Page } from './s53231.page';

describe('S53231Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53231Page;
  let fixture: ComponentFixture<S53231Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53231Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53231Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
