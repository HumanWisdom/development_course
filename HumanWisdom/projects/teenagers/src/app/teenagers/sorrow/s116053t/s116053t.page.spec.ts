import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116053tPage } from './s116053t.page';

describe('S116053tPage', () => {
      
    let component:  S116053tPage;
  let fixture: ComponentFixture<S116053tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116053tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116053tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
