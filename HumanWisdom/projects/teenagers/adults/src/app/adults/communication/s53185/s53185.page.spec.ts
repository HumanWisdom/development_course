import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53185Page } from './s53185.page';

describe('S53185Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53185Page;
  let fixture: ComponentFixture<S53185Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53185Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53185Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
