import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55049tPage } from './s55049t.page';

describe('S55049tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55049tPage;
  let fixture: ComponentFixture<S55049tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55049tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55049tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
