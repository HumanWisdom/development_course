import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116072tPage } from './s116072t.page';

describe('S116072tPage', () => {
      
    let component:  S116072tPage;
  let fixture: ComponentFixture<S116072tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116072tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116072tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
