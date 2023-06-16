import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116091tPage } from './s116091t.page';

describe('S116091tPage', () => {
      
    let component:  S116091tPage;
  let fixture: ComponentFixture<S116091tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116091tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116091tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
