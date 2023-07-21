import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132185Page } from './s132185.page';

describe('S132185Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132185Page;
  let fixture: ComponentFixture<S132185Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132185Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132185Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
